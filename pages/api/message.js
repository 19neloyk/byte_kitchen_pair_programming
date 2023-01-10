export default function handler(req, res) {
    if (req.method === 'GET') {
        // GET request: Case where we request an arbitrary message
        // Accepted param(s): None
        res.status(200).json({ message: "This is an arbitrary message" });

    } else if (req.method === 'POST') {
        // POST request: Case where we request a reversed message
        // Accepted param(s): "input"
        let input = req.query.input;
        let message = input.split("").reverse().join("");
        
        // Send back the message
        res.status(200).json({ message: message });

    } else {
        // In case of unsupported methods
        res.status(405).json({ message: "Method not allowed" });
    }

};