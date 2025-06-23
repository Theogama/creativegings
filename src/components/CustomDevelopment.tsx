
const CustomDevelopment = () => (
  <div className="mt-16 backdrop-blur-md bg-background/60 border border-border/50 rounded-2xl p-8 shadow-lg animate-fade-in">
    <div className="text-center mb-8">
      <h3 className="text-3xl font-bold text-foreground mb-4">Custom Development</h3>
      <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full text-2xl font-bold">
        T.B.D
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h4 className="text-xl font-bold text-foreground mb-4">Available Solutions:</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Learning Management Systems (LMS)</li>
          <li>• CRM Systems</li>
          <li>• Booking and Reservation Systems</li>
          <li>• Web Portals</li>
          <li>• Health and Fitness Platforms</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-bold text-foreground mb-4">Enterprise Features:</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Financial and Banking Systems</li>
          <li>• Event Management Systems</li>
          <li>• Custom API Integrations</li>
          <li>• And More Based on Requirements</li>
        </ul>
      </div>
    </div>

    <p className="text-center text-muted-foreground mt-6 italic">
      Payment plans can be arranged for e-commerce and custom development.{' '}
      <a href="/terms" className="text-primary hover:underline">Terms of Service apply</a>.
    </p>
  </div>
);

export default CustomDevelopment;
