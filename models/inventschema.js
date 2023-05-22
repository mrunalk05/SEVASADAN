
const invenSchema= new mongoose.Schema({
    medname:{
      type: String,
      required: true
    },
    medcompany:{
      type: String,
      required: true
    },
    quantity:{
      type: String,
      required: true
    },
    disease:{
      type: String,
      required: true
    }
  });
  
  const medd= mongoose.model('medd', invenSchema);
  export default medd;