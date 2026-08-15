const toneStyles = {
  light: {
    text: 'text-slate-700',
    rule: 'bg-primary',
  },
  dark: {
    text: 'text-blue-200',
    rule: 'bg-blue-300',
  },
};

const SectionEyebrow = ({ children, tone = 'light' }) => {
  const styles = toneStyles[tone] ?? toneStyles.light;

  return (
    <div
      className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] ${styles.text}`}
    >
      <span aria-hidden="true" className={`h-4 w-1 shrink-0 ${styles.rule}`} />
      <span>{children}</span>
    </div>
  );
};

export default SectionEyebrow;
