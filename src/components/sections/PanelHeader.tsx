interface PanelHeaderProps {
  title: string;
}

export function PanelHeader({ title }: PanelHeaderProps) {
  return (
    <header
      className="bg-panelHeader text-white px-4 py-3 h-12 flex items-center"
      role="banner"
    >
      <h2 className="text-base font-semibold m-0">{title}</h2>
    </header>
  );
}
