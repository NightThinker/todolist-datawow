const Progress = () => {
    return (
        <div className="content-progress">
            <h1 className="text-white">Progress</h1>
            <div className="relative progress radius-full">
                <div className="absolute rank-progress h-full radius-full" style={{ width: "10%" }} />
            </div>
            <p className="text-pink">12 completed</p>
        </div>
    );
};

export default Progress;
