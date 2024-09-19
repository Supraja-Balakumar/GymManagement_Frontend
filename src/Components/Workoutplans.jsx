// import React from 'react';

// const Workoutplans = () => {
//   // Define video data with YouTube links and topics
//   const videos = [
//     { topic: "Full Body Workout", url: "https://media.istockphoto.com/id/1335038498/video/4k-video-footage-of-a-handsome-mature-man-using-dumbbells-during-his-workout-in-the-gym.mp4?s=mp4-640x640-is&k=20&c=K_708tMw3BBD1O4uPhqlJ7UWmOxFbH-C-0LmidpvhC0=" },
//     { topic: "Upper Body Strength", url: "https://cdn.pixabay.com/video/2022/10/16/135162-761273567_large.mp4" },
//     { topic: "Lower Body Strength", url: "https://media.istockphoto.com/id/1422016937/video/woman-jogging-on-treadmill-at-the-gym.mp4?s=mp4-640x640-is&k=20&c=uzbfUg-xRmvHwdXN2qGHmW6GrBdsljgVRu8ARnuKq0k=" },
//     { topic: "Cardio Training", url: "https://cdn.pixabay.com/video/2017/10/31/12697-241674141_large.mp4" },
//     { topic: "HIIT Workout", url: "https://cdn.pixabay.com/video/2023/01/27/148208-793717949_large.mp4" },
//     // { topic: "Yoga for Flexibility", url: "https://www.youtube.com/embed/dpHklUq0qMs" },
//     { topic: "Core Strength Exercises", url: "https://cdn.pixabay.com/video/2022/10/16/135161-761273563_large.mp4" },
//     // { topic: "Pilates for Beginners", url: "https://www.youtube.com/embed/0_Q_oTzTl3Y" },
//     { topic: "Bodyweight Exercises", url: "https://cdn.pixabay.com/video/2023/01/27/148208-793717949_large.mp4" },
//     { topic: "Stretching Routine", url: "https://cdn.pixabay.com/video/2023/01/27/148196-793717922_large.mp4" }
//   ];

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="bg-blue-800 text-white w-64 p-4">
//         <div className="text-2xl font-bold mb-6">GYMFIT</div>
//         <ul>
//           <li className="mb-4">
//             <a href="/memberpage" className="hover:text-gray-400">Dashboard</a>
//           </li>
//           <li className="mb-4">
//             <a href="/slotspage" className="hover:text-gray-400">View Classes</a>
//           </li>
//           <li className="mb-4">
//             <a href="/workoutplans" className="hover:text-gray-400">Workout Plans</a>
//           </li>
//           <li className="mb-4">
//             <a href="/paymentview" className="hover:text-gray-400">Payment</a>
//           </li>
//           <li className="mb-4">
//             <a href="#" className="hover:text-gray-400">Logout</a>
//           </li>
//         </ul>
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex-1 p-6 bg-gray-800 overflow-y-auto">
//         <h1 className="text-3xl font-bold text-white mb-6">Workout Plans</h1>
//         <div className="space-y-6">
//           {videos.map((video, index) => (
//             <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
//               <iframe
//                 className="w-full h-64"
//                 src={video.url}
//                 title={video.topic}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//               <div className="p-4 text-white">
//                 <h2 className="text-xl font-semibold">{video.topic}</h2>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workoutplans;


import React from 'react';

const Workoutplans = () => {
  // Define video data with URLs and topics
  const videos = [
    { topic: "Full Body Workout", url: "https://media.istockphoto.com/id/1335038498/video/4k-video-footage-of-a-handsome-mature-man-using-dumbbells-during-his-workout-in-the-gym.mp4?s=mp4-640x640-is&k=20&c=K_708tMw3BBD1O4uPhqlJ7UWmOxFbH-C-0LmidpvhC0=" },
    { topic: "Upper Body Strength", url: "https://cdn.pixabay.com/video/2022/10/16/135162-761273567_large.mp4" },
    { topic: "Lower Body Strength", url: "https://media.istockphoto.com/id/1422016937/video/woman-jogging-on-treadmill-at-the-gym.mp4?s=mp4-640x640-is&k=20&c=uzbfUg-xRmvHwdXN2qGHmW6GrBdsljgVRu8ARnuKq0k=" },
    { topic: "Cardio Training", url: "https://cdn.pixabay.com/video/2017/10/31/12697-241674141_large.mp4" },
    { topic: "HIIT Workout", url: "https://cdn.pixabay.com/video/2023/01/27/148208-793717949_large.mp4" },
    { topic: "Core Strength Exercises", url: "https://cdn.pixabay.com/video/2022/10/16/135161-761273563_large.mp4" },
    { topic: "Bodyweight Exercises", url: "https://cdn.pixabay.com/video/2023/01/27/148208-793717949_large.mp4" },
    { topic: "Stretching Routine", url: "https://cdn.pixabay.com/video/2023/01/27/148196-793717922_large.mp4" }
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-blue-800 text-white w-64 p-4">
        <div className="text-2xl font-bold mb-6">GYMFIT</div>
        <ul>
          <li className="mb-4">
            <a href="/memberpage" className="hover:text-gray-400">Dashboard</a>
          </li>
          <li className="mb-4">
            <a href="/slotspage" className="hover:text-gray-400">View Classes</a>
          </li>
          <li className="mb-4">
            <a href="/workoutplans" className="hover:text-gray-400">Workout Plans</a>
          </li>
          <li className="mb-4">
            <a href="/paymentview" className="hover:text-gray-400">Payment</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Logout</a>
          </li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-800 overflow-y-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Workout Plans</h1>
        <div className="space-y-6">
          {videos.map((video, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg mb-6">
              <iframe
                className="w-full h-64"
                src={video.url}
                title={video.topic}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4 text-white">
                <h2 className="text-xl font-semibold">{video.topic}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workoutplans;
