interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  large?: boolean;
}

export default function FeatureCard({ icon, title, description, large = false }: FeatureCardProps) {
  return (
    <div className={`
      bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200
      ${large ? 'p-6 md:p-8' : 'p-5 md:p-6'}
    `}>
      <div className="flex flex-col items-start gap-4">
        <div className={`
          rounded-lg bg-blue-50 p-3
          ${large ? 'mb-2' : 'mb-1'}
        `}>
          {icon}
        </div>
        <h3 className={`
          font-semibold text-gray-900
          ${large ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}
        `}>
          {title}
        </h3>
        <p className={`
          text-gray-600
          ${large ? 'text-base md:text-lg' : 'text-sm md:text-base'}
        `}>
          {description}
        </p>
      </div>
    </div>
  );
}