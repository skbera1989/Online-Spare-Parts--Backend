const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // Basic Part Information
  partName: { type: String, required: true },
  partTitle: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String },
  brand: { type: String, required: true },
  partNumber: { type: String, required: true },
  oemAftermarket: { type: String, enum: ['OEM', 'Aftermarket'], required: true },
  condition: { type: String, enum: ['New', 'Used', 'Refurbished'], required: true },

  // Vehicle Compatibility
  vehicleType: { type: String, required: true },
  maker: { type: String, required: true },
  model: { type: String, required: true },
  variant: { type: String },
  fuelType: { type: String, required: true },
  transmission: { type: String, required: true },
  yearFrom: { type: Number, required: true },
  yearTo: { type: Number, required: true },
  engineCC: { type: String },
  compatibleVehicles: [{ type: String }],

  // Search & Discovery
  keywords: [{ type: String }],
  alternateNames: [{ type: String }],
  partPosition: { type: String },
  assemblyType: { type: String, default: 'Single part' },

  // Pricing & Inventory
  sellingPrice: { type: Number, required: true },
  mrp: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  stockQuantity: { type: Number, required: true },
  minOrderQuantity: { type: Number, default: 1 },
  gstRate: { type: Number, default: 18 },

  // Product Details
  description: { type: String, required: true },
  material: { type: String },
  dimensions: {
    length: { type: String },
    width: { type: String },
    height: { type: String }
  },
  weight: { type: String },
  color: { type: String },
  warranty: { type: String },
  certifications: [{ type: String }],

  // Media
  mainImage: { type: String },
  additionalImages: [{ type: String }],
  video: { type: String },
  installationGuide: { type: String },

  // Shipping & Logistics
  packageWeight: { type: String },
  packageDimensions: {
    length: { type: String },
    width: { type: String },
    height: { type: String }
  },
  shippingTime: { type: String },
  shippingCharges: { type: Number, default: 0 },
  freeShipping: { type: Boolean, default: false },
  dispatchLocation: { type: String },

  // Quality & Authenticity
  genuineOEM: { type: Boolean, default: true },
  serialNumber: { type: String },
  manufacturingDate: { type: Date },
  expiryDate: { type: Date },

  // Backend fields
  name: { type: String }, // For compatibility
  price: { type: Number }, // For compatibility
  status: { type: String, enum: ['active', 'pending', 'approved', 'rejected', 'sold_out'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);