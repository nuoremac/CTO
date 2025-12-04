const MOVEMENTS = [
  { id: "squat", label: "Squat", icon: "🏋️" },
  { id: "pushup", label: "Pompes", icon: "🤸" },
  { id: "yoga-dog", label: "Chien tête en bas", icon: "🧘" },
];

export default function MovementSelector({ selectedMovement, onChange }) {
  return (
    <div className="movement-grid">
      {MOVEMENTS.map(m => (
        <button
          key={m.id}
          type="button"
          className={
            "movement-card" +
            (selectedMovement === m.id ? " movement-card-active" : "")
          }
          onClick={() => onChange(m.id)}
        >
          <div className="movement-icon">{m.icon}</div>
          <div className="movement-label">{m.label}</div>
        </button>
      ))}
    </div>
  );
}
