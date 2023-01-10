export default function handler(req, res) {
    if (req.method === 'GET') {
        // GET request

        // This is the message we will respond with
        let message;

        // Case where we have no input message; send back a default message
        if (req.query.inputmessage === undefined) {
            message = "This is an arbitrary message";

        // Case where we do have an input message; send back the reversed version
        } else {
            inputmessage = req.query.inputmessage;
            message = inputmessage.split("").reverse().join("");
        }

        // Send back the message
        res.status(200).json({ message: message });

    }

    // In case of unsupported methods
    res.status(405).json({ message: "Method not allowed" }
}