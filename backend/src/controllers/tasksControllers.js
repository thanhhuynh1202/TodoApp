import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({createdAt: -1});
        res.status(200).json(tasks);
    } catch (error) {
        console.log("Lỗi khi gọi getAllTasks!", error);
        res.status(500).json({message: "Lỗi hệ thống!"});
    }
};

export const createTask = async (req, res) => {
    try {
        const {title} = req.body;
        const task = new Task({title});

        const newTask = await task.save();
        res.status(201).json(newTask);

    } catch (error) {
        console.log("Lỗi khi gọi createTask!", error);
        res.status(500).json({message: "Lỗi hệ thống!"});
    }
    
};

export const updateTask = async (req, res) => {
    try {
        const {title, status, completedAt} = req.body;
        const updateTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title,
                status,
                completedAt
            },
            {new : true}
        );
        
        if(!updateTask){
            return res.status(404).json({message: "Nhiệm vụ không tồn tại!"})
        }

        res.status(201).json(updateTask);

    } catch (error) {
        console.log("Lỗi khi gọi updateTask!", error);
        res.status(500).json({message: "Lỗi hệ thống!"});
    }
    
};

export const deleteTasks = async (req, res) => {
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id);

        if(!deleteTask){
            return res.status(404).json({message: "Nhiệm vụ không tồn tại!"});
        }

        res.status(201).json(deleteTask);
    } catch (error) {
        console.log("Lỗi khi gọi deleteTask!", error);
        res.status(500).json({message: "Lỗi hệ thống!"});
    }
};