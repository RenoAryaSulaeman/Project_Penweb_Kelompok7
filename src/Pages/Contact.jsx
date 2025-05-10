import React from "react";

const Contact = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p className="mb-2">
                If you have any questions, suggestions, or want to share your favorite recipe, feel free to reach out to us!
            </p>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Email:</strong> recipesupport@foodhub.com</li>
                <li>
                    <strong>Instagram:</strong>{" "}
                    <a
                        href="https://instagram.com/foodhub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        @foodhub
                    </a>
                </li>
                <li><strong>WhatsApp:</strong> +62 812-3456-7890</li>
            </ul>
            <p className="mt-4">We’d love to hear from you!</p>
        </div>
    );
};

export default Contact;
