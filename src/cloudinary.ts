import { Cloudinary } from '@cloudinary/url-gen'

export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.CLOUDINARY_NAME || process.env.CLOUDINARY_NAME,
    apiKey: import.meta.env.CLOUDINARY_KEY || process.env.CLOUDINARY_KEY,
    apiSecret: import.meta.env.CLOUDINARY_SECRET || process.env.CLOUDINARY_SECRET
  }
})
