// @ts-nocheck

import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function n(e: any) {
      this.init(e || {});
    }
    n.prototype = {
      init: function (e: any) {
        this.phase = e.phase || 0;
        this.offset = e.offset || 0;
        this.frequency = e.frequency || 0.001;
        this.amplitude = e.amplitude || 1;
      },
      update: function () {
        this.phase += this.frequency;
        return this.offset + Math.sin(this.phase) * this.amplitude;
      },
      value: function () {
        return this.offset + Math.sin(this.phase) * this.amplitude;
      },
    };

    function Line(e: any) {
      this.init(e || {});
    }

    Line.prototype = {
      init: function (e: any) {
        this.spring = e.spring + 0.1 * Math.random() - 0.02;
        this.friction = E.friction + 0.01 * Math.random() - 0.002;
        this.nodes = [];
        for (var t, n = 0; n < E.size; n++) {
          t = new Node();
          t.x = pos.x;
          t.y = pos.y;
          this.nodes.push(t);
        }
      },
      update: function () {
        var e = this.spring,
          t = this.nodes[0];
        t.vx += (pos.x - t.x) * e;
        t.vy += (pos.y - t.y) * e;
        for (var n, i = 0, a = this.nodes.length; i < a; i++)
          (t = this.nodes[i]),
            0 < i &&
              ((n = this.nodes[i - 1]),
              (t.vx += (n.x - t.x) * e),
              (t.vy += (n.y - t.y) * e),
              (t.vx += n.vx * E.dampening),
              (t.vy += n.vy * E.dampening)),
            (t.vx *= this.friction),
            (t.vy *= this.friction),
            (t.x += t.vx),
            (t.y += t.vy),
            (e *= E.tension);
      },
      draw: function () {
        var e,
          t,
          n = this.nodes[0].x,
          i = this.nodes[0].y;
        ctx.beginPath();
        ctx.moveTo(n, i);
        for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
          e = this.nodes[a];
          t = this.nodes[a + 1];
          n = 0.5 * (e.x + t.x);
          i = 0.5 * (e.y + t.y);
          ctx.quadraticCurveTo(e.x, e.y, n, i);
        }
        e = this.nodes[a];
        t = this.nodes[a + 1];
        ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
        ctx.stroke();
        ctx.closePath();
      },
    };

    function Node() {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
    }

    var ctx: CanvasRenderingContext2D,
      f: any,
      pos = { x: 0, y: 0 },
      lines: any[] = [],
      E = {
        debug: true,
        friction: 0.5,
        trails: 20,
        size: 50,
        dampening: 0.25,
        tension: 0.98,
      };

    function onMousemove(e: MouseEvent | TouchEvent) {
      function o() {
        lines = [];
        for (var e = 0; e < E.trails; e++)
          lines.push(new (Line as any)({ spring: 0.4 + (e / E.trails) * 0.025 }));
      }
      function c(e: MouseEvent | TouchEvent) {
        if ('touches' in e) {
          pos.x = e.touches[0].pageX;
          pos.y = e.touches[0].pageY;
        } else {
          pos.x = e.clientX;
          pos.y = e.clientY;
        }
        e.preventDefault();
      }
      function l(e: TouchEvent) {
        if (e.touches.length === 1) {
          pos.x = e.touches[0].pageX;
          pos.y = e.touches[0].pageY;
        }
      }

      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('touchstart', onMousemove);
      document.addEventListener('mousemove', c);
      document.addEventListener('touchmove', c as any);
      document.addEventListener('touchstart', l);
      c(e);
      o();
      render();
    }

    function render() {
      if (ctx.running) {
        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = 'hsla(' + Math.round(f.update()) + ',50%,50%,0.2)';
        ctx.lineWidth = 1;
        for (var e, t = 0; t < E.trails; t++) {
          e = lines[t];
          e.update();
          e.draw();
        }
        ctx.frame++;
        animationRef.current = requestAnimationFrame(render);
      }
    }

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      ctx.canvas.width = window.innerWidth * dpr;
      ctx.canvas.height = window.innerHeight * dpr;
      ctx.canvas.style.width = window.innerWidth + 'px';
      ctx.canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    }

    const renderCanvas = function () {
      ctx = canvas.getContext('2d')!;
      (ctx as any).running = true;
      (ctx as any).frame = 1;
      ctxRef.current = ctx;
      
      f = new (n as any)({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
      });
      
      document.addEventListener('mousemove', onMousemove as any);
      document.addEventListener('touchstart', onMousemove as any);
      window.addEventListener('resize', resizeCanvas);
      
      const handleFocus = () => {
        if (!(ctx as any).running) {
          (ctx as any).running = true;
          render();
        }
      };
      
      const handleBlur = () => {
        (ctx as any).running = true;
      };
      
      window.addEventListener('focus', handleFocus);
      window.addEventListener('blur', handleBlur);
      resizeCanvas();
    };

    renderCanvas();

    return () => {
      if (ctxRef.current) {
        (ctxRef.current as any).running = false;
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      document.removeEventListener('mousemove', onMousemove as any);
      document.removeEventListener('touchstart', onMousemove as any);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default CustomCursor;