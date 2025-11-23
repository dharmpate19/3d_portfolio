import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-30 blur-lg animate-pulse" />
          <div className="w-full h-full border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <div className="absolute top-3 left-3 right-3 bottom-3 border-4 border-blue-400 border-b-transparent rounded-full animate-[spin_1.2s_linear_reverse_infinite]" />
        </div>
      </div>
    </Html>
  );
};

export default Loader;
