import React from "react";

const Home = ({judul}) => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{judul}</h1>
            <p className="mb-2">
                Explore a world of delicious and easy-to-make recipes right at your fingertips.
                Whether you're looking for traditional comfort food or something new to try, we've got something for everyone.
            </p>
            <p className="mb-2">
                Browse through our curated collection of dishes, search by ingredients, and save your favorites.
                Cooking has never been this fun and simple!
            </p>
            <p>
                Start your cooking journey with us and make every meal memorable. Happy cooking!
            </p>
        </div>
    );
};

export default Home;
