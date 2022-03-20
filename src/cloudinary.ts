import { Cloudinary } from '@cloudinary/url-gen'

export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUDINARY_NAME || import.meta.env.CLOUDINARY_NAME,
    apiKey: process.env.CLOUDINARY_KEY || import.meta.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET || import.meta.env.CLOUDINARY_SECRET
  }
})
