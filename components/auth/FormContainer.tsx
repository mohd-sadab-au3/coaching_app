import { motion } from 'framer-motion';

interface FormContainerProps {
  title: string;
  children: React.ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export default function FormContainer({ children }: FormContainerProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-md">
        <div className="bg-white shadow-xl rounded-2xl p-8 space-y-6">
          {children}
        </div>
      </div>
    </motion.div>
  );
}