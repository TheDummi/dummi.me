/** @format */

import { model, Schema } from 'mongoose';

const schema = new Schema(
	{
		id: { type: String, required: true, unique: true },
		access: {
			token: String,
			refresh: String,
			expires: Date,
		},
	},
	{ timestamps: true }
);

const Account = model('account', schema);

export default Account;
