const notFound = (req, res) => {
    res.status(404).send("Resource not found");
};

export default notFound;
