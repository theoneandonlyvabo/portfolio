"use client";

import { useRef, useEffect, useState } from "react";

const ORBIT_ITEMS = [
    {
        angle: 0,
        radius: 280,
        label: "2× Champion",
        sub: "Back-to-back debut wins",
        icon: "🏆",
    },
    {
        angle: 72,
        radius: 300,
        label: "30 Members",
        sub: "< 3 months to build",
        icon: "⚡",
    },
    {
        angle: 144,
        radius: 270,
        label: "Skalar Solutions",
        sub: "Consulting & Digital",
        icon: "◈",
    },
    {
        angle: 216,
        radius: 290,
        label: "Apex",
        sub: "Fintech & Investment",
        icon: "◆",
    },
    {
        angle: 288,
        radius: 260,
        label: "3 Products",
        sub: "QIOS, BBIkan & more",
        icon: "◉",
    },
];

const STORY_SEGMENTS = [
    {
        id: "origin",
        eyebrow: "THE ORIGIN",
        heading: "A golden experience.",
        body: "Three people who believed that building something real — product, profit, impact — is worth more than any grade. One competition. First place on debut. That answer changed everything.",
    },
    {
        id: "bet",
        eyebrow: "THE BET",
        heading: "Unlimited potential,\nzero catalyst.",
        body: "Student ambition isn't scarce. What's missing is structure. So I became the structure — and within three months, 30 people showed up ready to build.",
    },
    {
        id: "built",
        eyebrow: "WHAT WE BUILT",
        heading: "Products that actually ship.",
        body: "QIOS. Benar-Benar Ikan. Consulting engagements. Two sub-holdings. National and international recognition. All from a team that didn't exist a semester ago.",
    },
    {
        id: "vision",
        eyebrow: "WHERE WE'RE GOING",
        heading: "Closing real gaps.",
        body: "Structured competitions. A funding model for small projects worth backing. And eventually: an ecosystem where students stop waiting for opportunity and start building it.",
    },
];

function GodRays() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div
                style={{
                    width: "900px",
                    height: "900px",
                    position: "absolute",
                    animation: "spinRays 18s linear infinite",
                }}
            >
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "450px",
                            height: "2px",
                            transformOrigin: "0 50%",
                            transform: `rotate(${i * 30}deg)`,
                            background: `linear-gradient(to right, transparent, rgba(217, 164, 80, ${0.04 + (i % 3) * 0.015}), transparent)`,
                            filter: "blur(6px)",
                        }}
                    />
                ))}
            </div>
            {/* Core glow */}
            <div
                style={{
                    width: "340px",
                    height: "340px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(217,164,80,0.18) 0%, rgba(217,164,80,0.05) 50%, transparent 75%)",
                    filter: "blur(20px)",
                    animation: "pulseGlow 4s ease-in-out infinite",
                }}
            />
        </div>
    );
}

function OrbitItem({
    item,
    scrollY,
    centerX,
    centerY,
}: {
    item: (typeof ORBIT_ITEMS)[0];
    scrollY: number;
    centerX: number;
    centerY: number;
}) {
    const [hovered, setHovered] = useState(false);
    const drift = scrollY * 0.04;
    const angleRad = ((item.angle + drift) * Math.PI) / 180;
    const x = centerX + Math.cos(angleRad) * item.radius;
    const y = centerY + Math.sin(angleRad) * item.radius * 0.45;

    return (
        <div
            className="absolute flex flex-col items-center gap-1 cursor-default"
            style={{
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
                transition: "transform 0.1s linear",
                zIndex: 20,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                style={{
                    width: hovered ? "64px" : "52px",
                    height: hovered ? "64px" : "52px",
                    borderRadius: "50%",
                    background: hovered
                        ? "rgba(217,164,80,0.15)"
                        : "rgba(255,255,255,0.04)",
                    border: `1px solid ${hovered ? "rgba(217,164,80,0.5)" : "rgba(255,255,255,0.08)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(8px)",
                    boxShadow: hovered
                        ? "0 0 24px rgba(217,164,80,0.2)"
                        : "0 0 0 transparent",
                }}
            >
                {item.icon}
            </div>
            <div
                style={{
                    opacity: hovered ? 1 : 0.6,
                    transition: "opacity 0.3s ease",
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px",
                        color: hovered ? "#d9a450" : "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        transition: "color 0.3s ease",
                    }}
                >
                    {item.label}
                </div>
                <div
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "9px",
                        color: "rgba(255,255,255,0.35)",
                        marginTop: "1px",
                    }}
                >
                    {item.sub}
                </div>
            </div>
        </div>
    );
}

function HeroOrb({ scrollY }: { scrollY: number }) {
    const parallaxY = scrollY * 0.12;
    const blurAmount = Math.min(scrollY * 0.015, 6);

    return (
        <div
            className="relative flex items-center justify-center"
            style={{
                width: "220px",
                height: "220px",
                transform: `translateY(${-parallaxY}px)`,
                filter: `blur(${blurAmount}px)`,
                transition: "filter 0.1s linear",
                zIndex: 10,
            }}
        >
            {/* Outer ring */}
            <div
                style={{
                    position: "absolute",
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    border: "1px solid rgba(217,164,80,0.2)",
                    animation: "spinSlow 20s linear infinite reverse",
                }}
            >
                {[0, 90, 180, 270].map((deg) => (
                    <div
                        key={deg}
                        style={{
                            position: "absolute",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "rgba(217,164,80,0.6)",
                            top: "50%",
                            left: "50%",
                            transform: `rotate(${deg}deg) translateX(107px) translateY(-50%)`,
                        }}
                    />
                ))}
            </div>
            {/* Inner ring */}
            <div
                style={{
                    position: "absolute",
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.06)",
                    animation: "spinSlow 14s linear infinite",
                }}
            />
            {/* Logo area */}
            <div
                style={{
                    width: "130px",
                    height: "130px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle at 40% 35%, rgba(217,164,80,0.22), rgba(15,15,24,0.9))",
                    border: "1px solid rgba(217,164,80,0.3)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow:
                        "0 0 40px rgba(217,164,80,0.15), inset 0 0 20px rgba(0,0,0,0.5)",
                }}
            >
                <div
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "11px",
                        color: "#d9a450",
                        letterSpacing: "0.2em",
                        fontWeight: 700,
                    }}
                >
                    2030
                </div>
                <div
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "9px",
                        color: "rgba(255,255,255,0.5)",
                        letterSpacing: "0.15em",
                        marginTop: "2px",
                    }}
                >
                    SUKSES!
                </div>
            </div>
        </div>
    );
}

function StoryCard({ segment }: { segment: (typeof STORY_SEGMENTS)[0] }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                padding: "28px 32px",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "2px",
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(4px)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "2px",
                    height: visible ? "100%" : "0%",
                    background:
                        "linear-gradient(to bottom, #d9a450, rgba(217,164,80,0))",
                    transition: "height 1s ease 0.3s",
                }}
            />
            <div
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    color: "#d9a450",
                    marginBottom: "10px",
                    fontWeight: 600,
                }}
            >
                {segment.eyebrow}
            </div>
            <div
                style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.92)",
                    lineHeight: 1.3,
                    marginBottom: "12px",
                    whiteSpace: "pre-line",
                }}
            >
                {segment.heading}
            </div>
            <div
                style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                }}
            >
                {segment.body}
            </div>
        </div>
    );
}

function StatCounter({
    value,
    label,
    prefix = "",
    suffix = "",
}: {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;
        let start = 0;
        const duration = 1800;
        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [visible, value]);

    return (
        <div ref={ref} style={{ textAlign: "center" }}>
            <div
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "42px",
                    fontWeight: 700,
                    color: "#d9a450",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                }}
            >
                {prefix}
                {count}
                {suffix}
            </div>
            <div
                style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.15em",
                    marginTop: "8px",
                    textTransform: "uppercase",
                }}
            >
                {label}
            </div>
        </div>
    );
}

export default function Section2030() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);
    const [orbSize, setOrbSize] = useState({ w: 700, h: 500, cx: 350, cy: 250 });

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const relY = -rect.top;
            setScrollY(Math.max(0, relY));
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const update = () => {
            const w = Math.min(window.innerWidth, 900);
            setOrbSize({ w, h: 520, cx: w / 2, cy: 260 });
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                background: "#06060a",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                overflow: "hidden",
                position: "relative",
            }}
        >
            <style>{`
        @keyframes spinRays {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

            {/* ── HERO PANEL ── */}
            <div
                style={{
                    position: "relative",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "80px",
                    paddingBottom: "80px",
                }}
            >
                {/* Title */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "64px",
                        animation: "fadeUp 0.9s ease both",
                        zIndex: 30,
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "11px",
                            letterSpacing: "0.3em",
                            color: "#d9a450",
                            marginBottom: "16px",
                            fontWeight: 600,
                        }}
                    >
                        INITIATIVE
                    </div>
                    <h2
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "clamp(36px, 6vw, 68px)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.05,
                            margin: 0,
                            color: "#fff",
                        }}
                    >
                        Meet{" "}
                        <span style={{ color: "#d9a450" }}>2030 SUKSES!</span>
                    </h2>
                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "15px",
                            color: "rgba(255,255,255,0.35)",
                            marginTop: "16px",
                            letterSpacing: "0.02em",
                        }}
                    >
                        Student-led. Intentionally built. Quietly unstoppable.
                    </p>
                </div>

                {/* Orbit stage */}
                <div
                    style={{
                        position: "relative",
                        width: `${orbSize.w}px`,
                        height: `${orbSize.h}px`,
                        maxWidth: "100vw",
                    }}
                >
                    <GodRays />

                    {/* Orbit items */}
                    {ORBIT_ITEMS.map((item) => (
                        <OrbitItem
                            key={item.label}
                            item={item}
                            scrollY={scrollY}
                            centerX={orbSize.cx}
                            centerY={orbSize.cy}
                        />
                    ))}

                    {/* Center orb */}
                    <div
                        style={{
                            position: "absolute",
                            left: orbSize.cx,
                            top: orbSize.cy,
                            transform: "translate(-50%, -50%)",
                            zIndex: 15,
                        }}
                    >
                        <HeroOrb scrollY={scrollY} />
                    </div>
                </div>
            </div>

            {/* ── STORY SECTION ── */}
            <div
                style={{
                    maxWidth: "960px",
                    margin: "0 auto",
                    padding: "80px 24px 0",
                }}
            >
                {/* Divider */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        marginBottom: "72px",
                    }}
                >
                    <div
                        style={{
                            flex: 1,
                            height: "1px",
                            background:
                                "linear-gradient(to right, transparent, rgba(255,255,255,0.08))",
                        }}
                    />
                    <div
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "9px",
                            color: "rgba(255,255,255,0.2)",
                            letterSpacing: "0.2em",
                        }}
                    >
                        THE STORY
                    </div>
                    <div
                        style={{
                            flex: 1,
                            height: "1px",
                            background:
                                "linear-gradient(to left, transparent, rgba(255,255,255,0.08))",
                        }}
                    />
                </div>

                {/* 2x2 story grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.04)",
                    }}
                >
                    {STORY_SEGMENTS.map((seg) => (
                        <StoryCard key={seg.id} segment={seg} />
                    ))}
                </div>
            </div>

            {/* ── STATS ROW ── */}
            <div
                style={{
                    maxWidth: "960px",
                    margin: "0 auto",
                    padding: "80px 24px",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                        gap: "48px",
                        padding: "48px 0",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                >
                    <StatCounter value={3} label="Months to 30 members" prefix="< " />
                    <StatCounter value={30} label="Members strong" suffix="+" />
                    <StatCounter value={2} label="Championships" suffix="×" />
                    <StatCounter value={3} label="Products shipped" suffix="+" />
                </div>
            </div>

            {/* ── CLOSING STATEMENT ── */}
            <div
                style={{
                    maxWidth: "680px",
                    margin: "0 auto",
                    padding: "0 24px 120px",
                    textAlign: "center",
                }}
            >
                <ClosingStatement />
            </div>
        </section>
    );
}

function ClosingStatement() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.4 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
        >
            <div
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "0.25em",
                    color: "#d9a450",
                    marginBottom: "24px",
                }}
            >
                THE REAL OUTPUT
            </div>
            <p
                style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(20px, 3vw, 28px)",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.5,
                    margin: "0 0 32px",
                    letterSpacing: "-0.01em",
                }}
            >
                Not just products or trophies.{" "}
                <span style={{ color: "#d9a450" }}>30 people</span> who now believe
                they can build something that matters.
            </p>
            <div
                style={{
                    width: "40px",
                    height: "1px",
                    background: "#d9a450",
                    margin: "0 auto",
                    opacity: 0.4,
                }}
            />
        </div>
    );
}