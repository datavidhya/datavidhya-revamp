"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
export const metadata = {
  title: "Rcently Purchased",
};
interface Purchase {
  id: string;
  studentName: string;
  courseName: string;
  date: string;
}

interface PurchaseFormData {
  studentName: string;
  courseName: string;
  date: string;
}

const convertToISO8601 = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      const [datePart, timePart] = dateString.split(' ');
      const [day, month, year] = datePart.split('-');
      const formattedDate = `${year}-${month}-${day}`;
      if (timePart) {
        return new Date(`${formattedDate} ${timePart}`).toISOString();
      }
      return new Date(formattedDate).toISOString();
    }
    return date.toISOString();
  } catch (error) {
    console.error('Date conversion error:', error);
    return new Date().toISOString(); // Fallback to current date
  }
};

const InputField: React.FC<{
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
}> = ({ label, value, onChange, placeholder, name }) => (
  <div className="text-black dark:text-black">
    <p>{label}</p>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-1 w-64 border bg-transparent px-4 py-2 outline-none max-md:w-full"
      name={name}
    />
  </div>
);

const PurchaseCard: React.FC<Purchase & { onDelete: (id: string) => void }> = ({
  id,
  studentName,
  courseName,
  date,
  onDelete,
}) => {
  const deletePurchasedCard = async () => {
    try {
    
      console.log('Deleting purchase with ID:', id);
      
      const res = await axios.post(
        "/api/v1/admin/recently-purchased",
        { id },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      console.log('Delete response:', res);
      
      if (res.status === 200) {
        toast.success("Purchase deleted successfully");
        onDelete(id);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error('Delete error:', error);
      if (axios.isAxiosError(error)) {
        toast.error(`Failed to delete: ${error.response?.data?.message || error.message}`);
      } else {
        toast.error("Failed to delete");
      }
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleString();
    } catch {
      return dateString;
    }
  };

  return (
    <div className="my-3 mr-6 w-96 bg-gray-900 p-4 text-white dark:bg-gray-200 dark:text-black rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg">{studentName}</h3>
        <Trash 
          className="cursor-pointer hover:text-red-500 transition-colors" 
          size={20}
          onClick={deletePurchasedCard} 
        />
      </div>
      <p className="text-gray-300 dark:text-gray-700 mb-1">{courseName}</p>
      <p className="text-sm text-gray-400 dark:text-gray-600">{formatDate(date)}</p>
    </div>
  );
};

const AddRecentlyPurchased = () => {
  const [formData, setFormData] = useState<PurchaseFormData>({
    studentName: "",
    courseName: "",
    date: "",
  });
  const [purchaseData, setPurchaseData] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();



  useEffect(() => {
    const fetchAllPurchasedData = async () => {
      try {
        setLoading(true);
        console.log('Fetching purchase data...');
        
        const res = await axios.get("/api/v1/admin/recently-purchased");
        console.log('Fetch response:', res.data);
        
        if (res.data && res.data.data) {
          setPurchaseData(res.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        if (axios.isAxiosError(error)) {
          toast.error(`Failed to fetch data: ${error.response?.data?.message || error.message}`);
        } else {
          toast.error("Failed to fetch purchase data");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchAllPurchasedData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.studentName?.trim() || !formData.courseName?.trim() || !formData.date?.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    setSubmitting(true);

    try {
  
      console.log('Form data before conversion:', formData);

      let formattedDate;
      try {
        formattedDate = convertToISO8601(formData.date);
        console.log('Converted date:', formattedDate);
      } catch (error) {
        console.error('Date conversion failed:', error);
        toast.error("Invalid date format. Please use DD-MM-YYYY HH:mm format");
        setSubmitting(false);
        return;
      }

      const payload = {
        studentName: formData.studentName.trim(),
        courseName: formData.courseName.trim(),
        date: formattedDate,
      };

      console.log('Sending payload:', payload);
      const res = await axios.post(
        "/api/v1/admin/recently-purchased",
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Add response:', res);

      if (res.status === 201 && res.data?.data) {
        toast.success("Purchase added successfully");
        setPurchaseData((prev) => [res.data.data, ...prev]);
        setFormData({ studentName: "", courseName: "", date: "" });
      } else {
        console.error('Unexpected response:', res);
        toast.error("Failed to add purchase - unexpected response");
      }
    } catch (error) {
      console.error("Error adding data:", error);
      
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        const statusCode = error.response?.status;
        console.error('API Error:', {
          status: statusCode,
          message: errorMessage,
          data: error.response?.data
        });
        toast.error(`Error adding purchase: ${errorMessage}`);
      } else {
        console.error('Non-Axios error:', error);
        toast.error("Unknown error occurred while adding purchase");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = (deletedId: string) => {
    setPurchaseData((prev) => prev.filter((item) => item.id !== deletedId));
  };

  return (
    <div className="mx-auto mt-36 w-4/5 pt-6 max-sm:w-[90%]">
      <Toaster />
      
      <h1 className="text-2xl font-bold mb-6 text-black dark:text-black">
        Manage Recent Purchases
      </h1>

    

      <div className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
          Add New Purchase
        </h2>
        <form onSubmit={handleSubmit} className="flex gap-6 max-md:flex-col">
          <InputField
            label="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Student Name"
            name="studentName"
          />
          <InputField
            label="Course Name"
            value={formData.courseName}
            onChange={handleChange}
            placeholder="Data Engineering"
            name="courseName"
          />
          <InputField
            label="Date (DD-MM-YYYY HH:mm)"
            value={formData.date}
            onChange={handleChange}
            placeholder="20-05-2024 12:55"
            name="date"
          />
          <button
            type="submit"
            disabled={submitting}
            className={`mt-7 h-10 w-40 px-6 text-white rounded transition-colors max-md:mt-0 max-md:w-full ${
              submitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-purple-500 hover:bg-purple-600'
            }`}
          >
            {submitting ? "Adding..." : "Add Purchase"}
          </button>
        </form>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-black dark:text-black">
          Recent Purchases ({purchaseData.length})
        </h2>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <p className="text-gray-600">Loading purchases...</p>
        </div>
      ) : purchaseData.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">No purchases found</p>
        </div>
      ) : (
        <div className="flex w-full flex-wrap">
          {purchaseData.map((item) => (
            <PurchaseCard 
              key={item.id} 
              {...item} 
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AddRecentlyPurchased;