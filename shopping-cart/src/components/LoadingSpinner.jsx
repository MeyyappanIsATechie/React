import './spinner.css'

const LoadingSpinner = () => {
  return (
    // <div className="flex items-center justify-center min-h-screen">
    //   <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
    // </div>
    // <div className="flex items-center justify-center min-h-screen bg-gray-50">
    //   <div className="relative">
    //     <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-t-blue-500 border-r-red-500 border-b-green-500 border-l-yellow-500"></div>
    //     <div className="absolute top-0 left-0 w-24 h-24 border-4 border-dashed rounded-full animate-pulse opacity-50 border-t-purple-500 border-r-pink-500 border-b-indigo-500 border-l-teal-500"></div>
    //   </div>
    // </div>
    <div className="flex justify-center items-center h-screen">
      <div className="spinner"></div>
    </div>
  )
}

export default LoadingSpinner
