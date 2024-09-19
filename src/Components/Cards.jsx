import React from 'react';


const posts = [
    {
        title: "Passionate About Fitness",
        desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
        img: "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg",
        // date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "Variety of Training",
        desc: "A good gym features specialized fitness instructors and knowledgeable coaches.",
        img: "https://www.shutterstock.com/image-photo/dumbbell-on-floor-fitness-gym-260nw-1481075741.jpg",
        // date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "High-Quality Exercise Equipment ",
        desc: "All gym equipment should be clean, well-maintained, and in good working order. By creating a highly connected fitness experience and leveraging wearables and heart rate monitors you can simplify fitness.",
        img: "https://media.istockphoto.com/id/625739874/photo/heavy-weight-exercise.jpg?s=612x612&w=0&k=20&c=B1uzJW1DBei2Rx5hnt139tt9dt3L7TbKrpgwbMR-LrI=",
        // date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
    {
        title: "Strength Training Equipment",
        desc: "Strength training is equally vital for a balanced fitness regime. Resistance Bands Offer versatility and are perfect for stretching, strength training, and rehabilitation exercises.",
        img: "https://media.istockphoto.com/id/1438034462/photo/latino-and-african-sport-woman-exercising-and-build-muscle-in-stadium-active-strong-beautiful.jpg?s=612x612&w=0&k=20&c=kFwCRkh8Q1v6uCoSTL7sQcsbk02zgSZJ1kDgnJ3DAZc=",
        // date: "Jan 4 2022",
        href: "javascript:void(0)"
    },

    {
        title: "Well-Designed Space and Facility",
        desc: "The space and standard of the facility are an integral part of a fitness business. The facility should be clean, well-maintained, and large enough to allow for social distancing. ",
        img: "https://t4.ftcdn.net/jpg/08/09/48/25/360_F_809482598_iFY3RUsAXrpaJAuFh2UijLuLhGMQYJDb.jpg",
        // date: "Jan 4 2022",
        href: "javascript:void(0)"
    },
     
    {
        title: "Functional Training Area",
        desc: "Functional training zones help members perform exercises that mimic everyday activities, improving their overall fitness and preventing injuries.",
        img: "https://www.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-260nw-749969473.jpg",
        // date: "Jan 4 2022",
        href: "javascript:void(0)"
    }

];

const BlogPosts = () => {
    return (
        <section className="py-32">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Latest blog posts</h1>
                    <p className="text-gray-600">Blogs that are loved by the community. Updated every hour.</p>
                    <form onSubmit={(e) => e.preventDefault()} className="items-center justify-center gap-3 sm:flex">
                        <div className="relative">
                            <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs"
                            />
                        </div>
                        <button className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto">
                            Subscribe
                        </button>
                    </form>
                </div>
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((item, index) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={index}>
                                <a href={item.href}>
                                    <img src={item.img} loading="lazy" alt={item.title} className="w-full rounded-lg" />
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-indigo-600 text-sm">{item.date}</span>
                                        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{item.desc}</p>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default BlogPosts;
