interface PaginationProps {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ current, total, onPageChange }: PaginationProps) {
  if (total <= 1) {
    return null; 
  }

  return (
    <div className="join flex justify-center">
      <button
        className="join-item btn bg-blue"
        onClick={() => onPageChange(current - 1)}
        disabled={current === 1}
      >
        «
      </button>
      <button
        className="join-item btn bg-blue"
        onClick={() => onPageChange(total)}
      >
        {current} / {total}
      </button>
      <button
        className="join-item btn bg-blue"
        onClick={() => onPageChange(current + 1)}
        disabled={current === total}
      >
        »
      </button>
  </div>
  );
}