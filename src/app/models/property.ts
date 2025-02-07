import {model, Schema, models} from "mongoose";

export const propertySchema = new Schema({

    owner: { type: Schema.Types.ObjectId,  required: true, ref: 'User' },
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    location: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: false },
        zipcode: { type: String, required: true }
    },
    beds: { type: Number, required: true },
      baths: { type: Number, required: true },
    square_feet: { type: Number, required: true },
    amenities: [{ type: String }],
    rates: {
        weekly: { type: Number, required: false },
        monthly: { type: Number, required: false },
        nightly: { type: Number, required: false }


    },
    seller_info: {
        name: { type: String, required: true },
        email: { type: String, required: false },
        phone: { type: String, required: false }
    },
    images: [{ type: String }],
    is_featured: { type: Boolean, default: false },
}, { timestamps: true });

export interface propertyInterface {
    _id: string;
    owner: string;
    name: string;
    type: string;
    description: string;
    location: {
      street: string;
      city: string;
      state: string;
      zipcode: string;
    };
  
      beds: number;
      baths: number;
  
    square_feet: number;
    amenities: string[];
    rates: {
      weekly: number;
      monthly: number;
      nightly: number;
    };
    seller_info: {
      name: string;
      email: string;
      phone: string;
    };
    images: string[];
    is_featured: boolean;
    createdAt: string;
    updatedAt: string;
  }

  
export interface ExtendedProperty extends propertyInterface {
    [key: string]: any;
  }


export const Property = models.Properties || model('Properties', propertySchema);