import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String },
  role: { type: Schema.Types.ObjectId, ref: 'Role' }
});

userSchema.plugin(mongoosePaginate);

export default mongoose.model('User', userSchema);
