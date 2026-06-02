// Temporary scratch page — 4 columns sized to match the
// Archetype showcase images. Real Archetype components are
// copied into app/archetype/ inside the portfolio.

const COLUMNS = [
    { label: "Col 1 (buttons)", width: 322 },
    { label: "Col 2 (cards)", width: 480 },
    { label: "Col 3 (labels)", width: 220 },
    { label: "Col 4 (sidenav)", width: 380 },
];

export default function TempPage() {
    return (
        <main className="min-h-screen bg-gray-50 p-10">
            <div className="mx-auto max-w-[1500px]">
                <h1 className="mb-2 text-2xl font-bold">Temp · 4-column scratchpad</h1>
                <p className="mb-8 text-sm text-gray-500">
                    Each column below is sized to its source image width
                    (322 / 480 / 220 / 380). Drop content into the column
                    body to prototype what should live in the showcase.
                </p>

                <div className="flex items-start gap-6 overflow-x-auto">
                    {COLUMNS.map((col) => (
                        <div
                            key={col.label}
                            className="shrink-0"
                            style={{ width: col.width }}>
                            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                {col.label} · {col.width}px
                            </div>
                            <div
                                className="min-h-[400px] rounded-xl border-2 border-dashed border-gray-300 bg-white p-5"
                                style={{ width: col.width }}>
                                {/* Drop content here */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
