import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const entitySchema = new Schema({
  field1: { type: String, required: true },
  field2: { type: Number },
  field3: { type: Boolean }
});

entitySchema.plugin(mongoosePaginate);

export default mongoose.model('Entity', entitySchema);
