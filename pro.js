document.getElementById("inquiry-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Page reload hone se roko

    // Form data collect karo
    const formData = {
        to_email: "sainisakshi@030gmail.com", // Yahan apni email daalo jisme inquiry aayegi
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        propertyType: document.getElementById("property").value,
        message: document.getElementById("message").value,
    };

    // EmailJS se email bhejne ka function
    emailjs.send("service_25pvauk", "template_jeaywed", formData, "g63lsD8BQnYqzgJvl")
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("success-message").classList.remove("hidden");
            document.getElementById("inquiry-form").reset(); // Form reset karega
        })
        .catch(function (error) {
            console.log("FAILED...", error);
            alert("Email bhejne me dikkat aa rahi hai. Dubara try karein.");
        });
});
