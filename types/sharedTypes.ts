interface Project {
    img: string;
    category: string;
}
interface ToolbarProps {
    filters: string[];
    selected: string;
    onSelectFilter: (filter: string) => void;
}
