import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Globe, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Capturing the Perfect Sunset",
    description: "Tips and techniques for stunning sunset photography",
    category: "tips",
    date: "2024-03-15",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Journey Through New Zealand",
    description: "A photographer's guide to the most scenic locations",
    category: "travel",
    date: "2024-03-10",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Essential Camera Settings for Landscapes",
    description: "Master the technical aspects of landscape photography",
    category: "photography",
    date: "2024-03-05",
    imageUrl: "/placeholder.svg",
  },
];

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <img
      src={post.imageUrl}
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <CardHeader>
      <CardTitle className="text-xl">{post.title}</CardTitle>
      <CardDescription>{post.date}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{post.description}</p>
    </CardContent>
  </Card>
);

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-serif mb-8">Stories</h1>
      
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid w-full grid-cols-4 max-w-[600px]">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="photography" className="gap-2">
            <Camera className="h-4 w-4" /> Photography
          </TabsTrigger>
          <TabsTrigger value="travel" className="gap-2">
            <Globe className="h-4 w-4" /> Travel
          </TabsTrigger>
          <TabsTrigger value="tips" className="gap-2">
            <Lightbulb className="h-4 w-4" /> Tips
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <BlogCard post={post} />
              </Link>
            ))}
          </div>
        </TabsContent>

        {["photography", "travel", "tips"].map((category) => (
          <TabsContent value={category} key={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter((post) => post.category === category)
                .map((post) => (
                  <Link to={`/blog/${post.id}`} key={post.id}>
                    <BlogCard post={post} />
                  </Link>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Blog;