const DescModel = require('./models/Desc');

module.exports = {
    Query: {
        getAllDatas: async () => await DescModel.find({}),
        getDesc: async (_, args) => await DescModel.findById(args._id)
    },

    Mutation: {
        createDesc: async (_, args) => {
            const desc = new DescModel(args);
            await desc.save();
            return desc;
        },
        
        updateDesc: async (_, args) => {
            const desc = await DescModel.findByIdAndUpdate(args._id, args, {new: true});
            return desc;
        },

        deleteDesc: async (_, args) => {
            const desc = await DescModel.findByIdAndRemove(args._id);
            if(desc) return true;
            return false;
        }

    }
}