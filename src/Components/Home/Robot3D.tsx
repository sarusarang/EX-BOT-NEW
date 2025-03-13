import React, { useEffect, useRef } from 'react';

const Robot3D: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        // Render animated robot
        const renderAnimatedBot = () => {
            if (!containerRef.current) return;

            containerRef.current.innerHTML = `
        <div class="w-full h-full flex items-center justify-center">
          <div class="relative">
            <!-- Robot head outline with advanced animation -->
            <div class="w-64 h-64 bg-black/30 backdrop-blur-xl rounded-3xl p-6 border border-green-500/30 shadow-lg relative animate-float">
              <!-- Robot eyes with pulse and blink animations -->
              <div class="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-green-500 opacity-80 shadow-[0_0_15px_rgba(34,197,94,0.7)] animate-pulse"></div>
              <div class="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-green-500 opacity-80 shadow-[0_0_15px_rgba(34,197,94,0.7)] animate-pulse" style="animation-delay: 0.5s;"></div>
              
              <!-- Robot mouth with animation -->
              <div class="absolute bottom-1/4 left-1/4 right-1/4 h-1 bg-green-500/70 rounded-full animate-pulse-slow"></div>
              <div class="absolute bottom-1/4 left-1/3 right-1/3 h-1 bg-green-500/90 rounded-full animate-pulse-slow" style="animation-delay: 1s;"></div>
              
              <!-- Robot antenna with glow effect -->
              <div class="absolute -top-5 left-1/2 transform -translate-x-1/2 w-2 h-10 bg-green-500/70 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.7)] animate-pulse-slow"></div>
              
              <!-- Holographic projection effect -->
              <div class="absolute w-full h-full inset-0 border-2 border-green-500/10 rounded-3xl opacity-50"></div>
              <div class="absolute w-full h-full inset-0 border-[1px] border-green-500/30 rounded-3xl animate-ping" style="animation-duration: 3s;"></div>
              
              <!-- Orbiting elements -->
              <div class="absolute w-16 h-16 -bottom-2 -right-2 border-2 border-green-500/30 rounded-full animate-spin-slow"></div>
              <div class="absolute w-10 h-10 -top-3 -left-3 border-2 border-green-500/30 rounded-full animate-spin-slow" style="animation-direction: reverse;"></div>
              <div class="absolute w-20 h-20 -bottom-5 -left-5 border-dashed border-[1px] border-green-500/20 rounded-full animate-spin-slow" style="animation-duration: 15s;"></div>
              
              <!-- Data processing visualization -->
              <div class="absolute top-1/2 right-[-15px] w-3 h-3 bg-green-500/60 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-ping" style="animation-duration: 2s;"></div>
              <div class="absolute bottom-1/3 left-[-10px] w-2 h-2 bg-green-500/60 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-ping" style="animation-duration: 2.5s;"></div>
            </div>
            
            <!-- Glowing base with ripple effect -->
            <div class="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-green-500/40 rounded-full blur-xl"></div>
            <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-green-500/80 rounded-full blur-sm animate-pulse-slow"></div>
            
            <!-- Floating particles with different animations -->
            <div class="absolute w-3 h-3 top-1/4 right-0 bg-green-500/30 rounded-full animate-float" style="animation-delay: 0.5s;"></div>
            <div class="absolute w-2 h-2 bottom-1/3 left-0 bg-green-500/30 rounded-full animate-float" style="animation-delay: 1s;"></div>
            <div class="absolute w-4 h-4 top-0 left-1/4 bg-green-500/20 rounded-full animate-float" style="animation-delay: 1.5s;"></div>
            <div class="absolute w-1 h-1 bottom-1/5 right-1/4 bg-green-500/50 rounded-full animate-pulse" style="animation-delay: 0.7s;"></div>
            
            <!-- Digital circuit lines with animation -->
            <div class="absolute w-20 h-[1px] top-1/2 -left-16 bg-gradient-to-r from-green-500/70 to-transparent animate-pulse-slow"></div>
            <div class="absolute w-20 h-[1px] bottom-1/3 -right-16 bg-gradient-to-l from-green-500/70 to-transparent animate-pulse-slow" style="animation-delay: 1s;"></div>
            <div class="absolute w-[1px] h-20 -top-16 right-1/3 bg-gradient-to-b from-green-500/70 to-transparent animate-pulse-slow" style="animation-delay: 1.5s;"></div>
            
            <!-- Data transmission visualization -->
            <div class="absolute top-1/2 left-[-50px] right-[-50px] h-[1px] bg-green-500/20 flex justify-between overflow-hidden">
              <div class="w-2 h-1 bg-green-500 rounded-full animate-ping" style="animation-duration: 2s;"></div>
              <div class="w-2 h-1 bg-green-500 rounded-full animate-ping" style="animation-duration: 1.5s; animation-delay: 0.5s;"></div>
              <div class="w-2 h-1 bg-green-500 rounded-full animate-ping" style="animation-duration: 1.8s; animation-delay: 1s;"></div>
            </div>
          </div>
        </div>
      `;
        };

        // Call the animation function
        renderAnimatedBot();

        // Add interactive hover effect
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const robotHead = containerRef.current.querySelector('div > div > div') as HTMLElement;
            if (!robotHead) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const moveX = (x - centerX) / 30;
            const moveY = (y - centerY) / 30;

            robotHead.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX / 2}deg)`;
        };

        const handleMouseLeave = () => {
            if (!containerRef.current) return;

            const robotHead = containerRef.current.querySelector('div > div > div') as HTMLElement;
            if (!robotHead) return;

            robotHead.style.transform = 'translate(0px, 0px) rotate(0deg)';
        };

        if (containerRef.current) {
            containerRef.current.addEventListener('mousemove', handleMouseMove);
            containerRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('mousemove', handleMouseMove);
                containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full relative perspective-1000">
            {/* Initial loading state */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-green-500/20 border-t-green-500 animate-spin"></div>
            </div>
        </div>
    );
};

export default Robot3D;
