const patterns: Record<number, number[]> = {
    1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8],
};
export function DiePips({ value }: {
    value: number;
}) {
    return <span className="die-pips" aria-hidden="true">{Array.from({ length: 9 }, (_, index) => <i key={index} className={patterns[value].includes(index) ? 'filled' : ''}/>)}</span>;
}
