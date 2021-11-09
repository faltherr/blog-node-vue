const dateNow = () => {
    const now = new Date();
    return now.toISOString();
};

export { dateNow }