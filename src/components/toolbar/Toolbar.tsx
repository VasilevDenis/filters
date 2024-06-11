import './Toolbar.css'

function Toolbar({ filters, selected, onSelectFilter }: ToolbarProps) {
    return (
        <div className="toolbar">
            {filters.map((filter: string) => (
                <button
                    key={filter}
                    className={filter === selected ? 'active' : ''}
                    onClick={() => onSelectFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    )
}

export default Toolbar