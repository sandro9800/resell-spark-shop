
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Edit, Eye, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      category: 'Electronics',
      supplierPrice: 45.00,
      yourPrice: 75.00,
      profit: 30.00,
      stock: 150,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      status: 'active'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      category: 'Electronics',
      supplierPrice: 120.00,
      yourPrice: 180.00,
      profit: 60.00,
      stock: 85,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      status: 'active'
    },
    {
      id: 3,
      name: 'Premium Phone Case',
      category: 'Accessories',
      supplierPrice: 8.50,
      yourPrice: 24.99,
      profit: 16.49,
      stock: 200,
      image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=400',
      status: 'active'
    },
    {
      id: 4,
      name: 'Wireless Charging Pad',
      category: 'Electronics',
      supplierPrice: 15.00,
      yourPrice: 35.00,
      profit: 20.00,
      stock: 120,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400',
      status: 'active'
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      category: 'Electronics',
      supplierPrice: 32.00,
      yourPrice: 59.99,
      profit: 27.99,
      stock: 90,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
      status: 'inactive'
    },
    {
      id: 6,
      name: 'USB-C Cable Set',
      category: 'Accessories',
      supplierPrice: 12.00,
      yourPrice: 29.99,
      profit: 17.99,
      stock: 300,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
      status: 'active'
    }
  ];

  const categories = ['all', 'Electronics', 'Accessories'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalProfit = filteredProducts.reduce((sum, product) => sum + product.profit, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Catalog</h1>
            <p className="text-gray-600">Manage your product listings and pricing</p>
          </div>
          <Button 
            onClick={() => navigate('/dashboard')}
            variant="outline"
          >
            Back to Dashboard
          </Button>
        </div>

        {/* Filters and Search */}
        <Card className="mb-8 bg-white shadow-lg">
          <CardHeader>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{filteredProducts.length}</p>
                <p className="text-gray-600">Products Available</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">${totalProfit.toFixed(2)}</p>
                <p className="text-gray-600">Potential Profit</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">
                  {filteredProducts.filter(p => p.status === 'active').length}
                </p>
                <p className="text-gray-600">Active Listings</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <Badge 
                  className={`absolute top-2 right-2 ${
                    product.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                  }`}
                >
                  {product.status}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>{product.category}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Supplier Price:</span>
                    <span className="font-medium">${product.supplierPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Your Price:</span>
                    <span className="font-medium text-blue-600">${product.yourPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-700">Profit per sale:</span>
                    <span className="font-bold text-green-600">${product.profit.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Stock:</span>
                    <span className="font-medium">{product.stock} units</span>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => navigate(`/products/${product.id}/view`)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <Card className="bg-white shadow-lg">
            <CardContent className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <p className="text-gray-400 mt-2">Try adjusting your search or filter settings.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Products;
