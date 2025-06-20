// "use client";
// import { useState } from "react";
// import Link from "next/link";

// import { MdClose } from "react-icons/md";

// import { FaFlag, FaCommentAlt, FaFileUpload, FaStar } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { useSelector } from "react-redux";

// import Image from "next/image";
// import ThankYouMessage from "./ThankYouMessage"; // Importing the ThankYouMessage component

// export default function Username() {

//   const details = useSelector((state:any) => state.auth.user);
//   const user = {

//     name: details?.name || "John Doe",
//     email: details?.email || "abc@gmail.com",
//     nationality: details?.nationality || "Indian",

//   };

//   // State for feedback popup
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [testimonial, setTestimonial] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const maxWords = 100;

//   const handleSubmitFeedback = (e: any) => {
//     e.preventDefault();
//     console.log({ rating, testimonial });
//     setSubmitted(true);
//   };

//   const handleCloseFeedback = () => {
//     setShowFeedback(false);
//     setSubmitted(false);
//     setRating(0);
//     setTestimonial("");
//   };

//   const wordCount = testimonial.split(/\s+/).filter((word) => word.length > 0).length;

//   return (
//     <div className="relative w-full pb-20 flex items-center justify-center overflow-hidden min-h-screen">
//       {/* Blurry Background Effect */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-32 -left-20 w-96 h-96 bg-gradient-to-br from-[#155da9] to-[#c30e16] rounded-full blur-3xl opacity-50"></div>
//         <div className="absolute -bottom-40 right-0 w-80 h-80 bg-gradient-to-br from-[#c30e16] to-[#155da9] rounded-full blur-3xl opacity-50"></div>
//       </div>

//       {/* Card Container */}
//       <div className={`relative p-3 bg-white rounded-xl shadow-lg mt-5 w-full max-w-md z-10 ${showFeedback ? "blur-sm" : ""}`}>
//         {/* User Profile Section */}
//         <div className="flex flex-col items-center gap-6 w-full">
//           {/* User Icon */}
//           <div className="relative w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
//             <Image src="/signinicon.png" alt="User profile" width={96} height={96} className="object-cover" priority />
//           </div>

//           {/* User Details */}
//           <h1 className="text-2xl font-semibold text-gray-800 text-center">{user.name}</h1>

//           <div className="flex flex-col gap-2 text-gray-600 text-center">
//             <div className="flex items-center justify-center">
//               <MdEmail className="mr-2 text-lg" />
//               <span>{user.email}</span>
//             </div>
//             <div className="flex items-center justify-center">
//               <FaFlag className="mr-2 text-lg" />
//               <span>{user.nationality}</span>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-200 w-full my-6"></div>

//         {/* Action Buttons */}
//         <div className="flex flex-col gap-4 w-full">
//           <Link href="/form" className="border text-center border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#155da9] hover:text-white transition duration-300 transform hover:-translate-y-1">
//             Submit Form
//           </Link>

//           <Link href="/uploaddocuments" className="border text-center flex items-center justify-center border-[#155da9] gap-4 text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#155da9] hover:text-white transition duration-300 transform hover:-translate-y-1">
//             <FaFileUpload />
//             <span>Submit Documents</span>
//           </Link>

//           <button onClick={() => setShowFeedback(true)} className="border text-center flex items-center justify-center border-[#155da9] gap-4 text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#8d8d8d] hover:text-white transition duration-300 transform hover:-translate-y-1">
//             <FaCommentAlt />
//             <span>Give Feedback</span>
//           </button>
//         </div>
//       </div>

//       {/* Feedback Popup */}
//       {showFeedback && (
//         <div className="fixed inset-0 flex items-center justify-center z-20 p-4">
//           <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleCloseFeedback}></div>

//           <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-30">
//             <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={handleCloseFeedback}>
//               <MdClose size={24} />
//             </button>

//             {!submitted ? (
//               <form onSubmit={handleSubmitFeedback}>
//                 <h2 className="text-2xl font-bold text-center mb-6">Share Your Feedback</h2>

//                 <div className="flex justify-center mb-6">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <button key={star} type="button" className="text-3xl mx-1 focus:outline-none" onClick={() => setRating(star)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)}>
//                       <FaStar className={star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-300"} />
//                     </button>
//                   ))}
//                 </div>

//                 <div className="mb-4">
//                   <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Testimonial {wordCount > maxWords && <span className="text-red-500">({wordCount - maxWords} over limit)</span>}
//                   </label>
//                   <textarea id="testimonial" rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#155da9]" placeholder="Share your experience (max 100 words)" value={testimonial} onChange={(e) => setTestimonial(e.target.value)} maxLength={500} />
//                   <p className="text-xs text-gray-500 mt-1">{wordCount} / {maxWords} words</p>
//                 </div>

//                 <button type="submit" disabled={rating === 0 || wordCount > maxWords} className={`w-full py-3 px-4 rounded-full font-medium text-white transition duration-300 ${rating === 0 || wordCount > maxWords ? "bg-gray-400 cursor-not-allowed" : "bg-[#155da9] hover:bg-[#124b8a]"}`}>
//                   Submit Feedback
//                 </button>
//               </form>
//             ) : (
//               <ThankYouMessage rating={rating} onClose={handleCloseFeedback} userId={""} />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { MdClose, MdEmail } from "react-icons/md";
// import { FaFlag, FaCommentAlt, FaFileUpload, FaStar } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import Image from "next/image";
// import ThankYouMessage from "./ThankYouMessage";

// export default function Username() {
//   const details = useSelector((state: any) => state.auth.user);
//   const user = {
//     name: details?.name || "John Doe",
//     email: details?.email || "abc@gmail.com",
//     nationality: details?.nationality || "Indian",
//   };

//   const [showFeedback, setShowFeedback] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [testimonial, setTestimonial] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const maxWords = 100;

//   const handleSubmitFeedback = (e: any) => {
//     e.preventDefault();
//     console.log({ rating, testimonial });
//     setSubmitted(true);
//   };

//   const handleCloseFeedback = () => {
//     setShowFeedback(false);
//     setSubmitted(false);
//     setRating(0);
//     setTestimonial("");
//   };

//   const wordCount = testimonial.split(/\s+/).filter((word) => word.length > 0).length;

//   return (
//     <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 px-4 pb-20 overflow-hidden">
//       {/* Gradient Blurs */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute -top-32 -left-20 w-96 h-96 bg-gradient-to-br from-[#155da9] to-[#c30e16] rounded-full blur-3xl opacity-50"></div>
//         <div className="absolute -bottom-40 right-0 w-80 h-80 bg-gradient-to-br from-[#c30e16] to-[#155da9] rounded-full blur-3xl opacity-50"></div>
//       </div>

//       {/* Profile Card */}
//       <div className={`relative z-10 w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl backdrop-blur-md ${showFeedback ? "blur-sm" : ""}`}>
//         {/* Profile Section */}
//         <div className="flex flex-col items-center text-center gap-4">
//           <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 shadow-inner">
//             <Image src="/signinicon.png" alt="User" width={96} height={96} className="object-cover" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
//           <div className="text-gray-600 text-sm space-y-1">
//             <div className="flex items-center justify-center gap-2">
//               <MdEmail className="text-lg" />
//               <span>{user.email}</span>
//             </div>
//             <div className="flex items-center justify-center gap-2">
//               <FaFlag className="text-lg" />
//               <span>{user.nationality}</span>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <hr className="my-6 border-gray-200" />

//         {/* Buttons */}
//         <div className="space-y-4">
//           <Link href="/form" className="block text-center border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium hover:bg-[#155da9] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
//             Submit Form
//           </Link>

//           <Link href="/uploaddocuments" className="flex items-center justify-center gap-3 text-center border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium hover:bg-[#155da9] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
//             <FaFileUpload />
//             <span>Submit Documents</span>
//           </Link>

//           <button onClick={() => setShowFeedback(true)} className="flex items-center justify-center gap-3 text-center border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium hover:bg-[#155da9] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
//             <FaCommentAlt />
//             <span>Give Feedback</span>
//           </button>

//           <button onClick={() => console.log("Logout logic here")} className="flex items-center justify-center gap-3 text-center border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium hover:bg-[#155da9] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Feedback Modal */}
//       {showFeedback && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
//           <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleCloseFeedback}></div>
//           <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-50">
//             <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={handleCloseFeedback}>
//               <MdClose size={24} />
//             </button>

//             {!submitted ? (
//               <form onSubmit={handleSubmitFeedback}>
//                 <h2 className="text-2xl font-bold text-center mb-6">Share Your Feedback</h2>

//                 <div className="flex justify-center mb-6">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <button
//                       key={star}
//                       type="button"
//                       className="text-3xl mx-1 focus:outline-none"
//                       onClick={() => setRating(star)}
//                       onMouseEnter={() => setHoverRating(star)}
//                       onMouseLeave={() => setHoverRating(0)}
//                     >
//                       <FaStar className={star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-300"} />
//                     </button>
//                   ))}
//                 </div>

//                 <div className="mb-4">
//                   <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Testimonial {wordCount > maxWords && <span className="text-red-500">({wordCount - maxWords} over limit)</span>}
//                   </label>
//                   <textarea
//                     id="testimonial"
//                     rows={5}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#155da9]"
//                     placeholder="Share your experience (max 100 words)"
//                     value={testimonial}
//                     onChange={(e) => setTestimonial(e.target.value)}
//                     maxLength={500}
//                   />
//                   <p className="text-xs text-gray-500 mt-1">{wordCount} / {maxWords} words</p>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={rating === 0 || wordCount > maxWords}
//                   className={`w-full py-3 px-4 rounded-full font-medium text-white transition duration-300 ${rating === 0 || wordCount > maxWords ? "bg-gray-400 cursor-not-allowed" : "bg-[#155da9] hover:bg-[#124b8a]"}`}
//                 >
//                   Submit Feedback
//                 </button>
//               </form>
//             ) : (
//               <ThankYouMessage rating={rating} onClose={handleCloseFeedback} userId={""} />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Link from "next/link";
import { MdClose, MdEmail } from "react-icons/md";
import { FaFlag, FaCommentAlt, FaFileUpload, FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import Image from "next/image";
import ThankYouMessage from "./ThankYouMessage";
import { selectUser } from "@/store/authSlice";

export default function Username() {
  const user = useSelector(selectUser);
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [testimonial, setTestimonial] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const maxWords = 100;

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/users/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          testimonial,
          userId: user?._id || "",
          name: user?.name || "Anonymous",
          description: testimonial,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit feedback");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit feedback");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseFeedback = () => {
    setShowFeedback(false);
    setSubmitted(false);
    setRating(0);
    setTestimonial("");
    setError("");
  };

  const wordCount = testimonial.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-100 px-4 pb-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-gradient-to-br from-[#155da9] to-[#c30e16] rounded-full blur-3xl opacity-60 animate-pulse-slow" />
        <div className="absolute bottom-[-160px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-[#c30e16] to-[#155da9] rounded-full blur-3xl opacity-50 animate-pulse-medium" />
        <div className="absolute top-[40%] left-[40%] w-[120px] h-[120px] bg-[#155da9] rounded-full blur-2xl opacity-30 animate-bounce-slow" />
      </div>

      {/* Profile Card */}
      <div className={`relative z-10 w-full max-w-md p-6 bg-white rounded-2xl shadow-xl backdrop-blur-md ${showFeedback ? "blur-sm" : ""}`}>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 shadow-inner">
            <Image src="/signinicon.png" alt="User" width={96} height={96} className="object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{user?.name || "Guest User"}</h2>
          <div className="text-gray-600 text-sm space-y-1">
            <div className="flex items-center justify-center gap-2">
              <MdEmail className="text-lg" />
              <span>{user?.email || "No email provided"}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaFlag className="text-lg" />
              <span>{user?.nationality || "Nationality not specified"}</span>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Buttons */}
        <div className="space-y-4">
          <Link href="/form" className="block text-center border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium hover:bg-[#155da9] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            Submit Form
          </Link>

          <Link href="/uploaddocuments" className="flex items-center justify-center gap-3 text-center border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium hover:bg-[#155da9] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            <FaFileUpload />
            <span>Submit Documents</span>
          </Link>

          <button onClick={() => setShowFeedback(true)} className="flex items-center justify-center gap-3 text-center border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium hover:bg-[#155da9] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            <FaCommentAlt />
            <span>Give Feedback</span>
          </button>

          <button onClick={() => console.log("Logout logic here")} className="flex items-center justify-center gap-3 text-center border border-red-500 text-red-500 px-6 py-3 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            Logout
          </button>
        </div>
      </div>

      {/* Feedback Modal */}
      {showFeedback && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleCloseFeedback}></div>
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-50">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={handleCloseFeedback}>
              <MdClose size={24} />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmitFeedback}>
                <h2 className="text-2xl font-bold text-center mb-6">Share Your Feedback</h2>
                {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}

                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-3xl mx-1 focus:outline-none"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      <FaStar className={star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-300"} />
                    </button>
                  ))}
                </div>

                <div className="mb-4">
                  <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Testimonial {wordCount > maxWords && (<span className="text-red-500">({wordCount - maxWords} over limit)</span>)}
                  </label>
                  <textarea
                    id="testimonial"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#155da9]"
                    placeholder="Share your experience (max 100 words)"
                    value={testimonial}
                    onChange={(e) => setTestimonial(e.target.value)}
                    maxLength={500}
                  />
                  <p className="text-xs text-gray-500 mt-1">{wordCount} / {maxWords} words</p>
                </div>

                <button
                  type="submit"
                  disabled={rating === 0 || wordCount > maxWords || isSubmitting}
                  className={`w-full py-3 px-4 rounded-full font-medium text-white transition duration-300 ${rating === 0 || wordCount > maxWords || isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#155da9] hover:bg-[#124b8a]"}`}
                >
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </button>
              </form>
            ) : (
              <ThankYouMessage rating={rating} onClose={handleCloseFeedback} userId={user?._id || ""} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}