
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  DollarSign, 
  Package, 
  Shield, 
  Zap, 
  Target,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Package,
      title: 'Curated Product Catalog',
      description: 'Access 1000+ high-quality products from verified suppliers with detailed specifications and competitive pricing.'
    },
    {
      icon: DollarSign,
      title: 'Flexible Profit Margins',
      description: 'Set your own prices and profit margins. Our platform calculates your earnings in real-time.'
    },
    {
      icon: TrendingUp,
      title: 'Analytics Dashboard',
      description: 'Track your sales, monitor performance, and identify your best-selling products with detailed analytics.'
    },
    {
      icon: ShoppingCart,
      title: 'Streamlined Orders',
      description: 'Automated order processing with supplier integration and customer notifications.'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Built-in payment processing with fraud protection and instant payouts to your account.'
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Manage customer relationships with built-in CRM tools and communication features.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'TechStyle Boutique',
      content: 'ResellerHub helped me launch my electronics business in just 2 weeks. The profit margins are incredible!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      business: 'Urban Accessories',
      content: 'The product quality and supplier network exceeded my expectations. My customers love the products.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      business: 'Home Essentials Co',
      content: 'From $0 to $10K monthly revenue in 3 months. The platform makes everything so simple.',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Active Resellers', value: '2,500+' },
    { label: 'Products Available', value: '1,000+' },
    { label: 'Monthly Revenue', value: '$2M+' },
    { label: 'Success Rate', value: '94%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            🚀 MVP Version - Start Your Journey Today
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Launch Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Reseller Business </span>
            in Minutes
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Access premium products, set your own prices, and start earning profits immediately. 
            No inventory, no upfront costs, no complicated setup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3"
              onClick={() => navigate('/auth')}
            >
              Start Selling Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-3"
              onClick={() => navigate('/products')}
            >
              Browse Products
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools and resources to build a profitable reseller business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Start selling in just 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Choose Products</h3>
              <p className="text-gray-600">
                Browse our catalog of 1000+ products and select items that match your target market.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Set Your Prices</h3>
              <p className="text-gray-600">
                Add your markup and set competitive prices. Our platform shows your profit margins in real-time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Start Earning</h3>
              <p className="text-gray-600">
                List products on your channels and start earning profits from every sale automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how other entrepreneurs are building successful businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Reseller Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful resellers who are building profitable businesses with our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              onClick={() => navigate('/auth')}
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              onClick={() => navigate('/products')}
            >
              View Products
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>No monthly commitments</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Start earning immediately</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
