
export const BasicType = () => {

    const name: string = 'Cesar';
    const age: number = 38;
    const isActive: boolean = false;

    const powers: string[] = ['React', 'Native', 'Astro', 'Angular'];

  return (
    <>
        <h3>Tipos básicos</h3>

        {name} - {age} - {isActive ? "Activo" : "No Activo"}

        <p>{powers.join(', ')}</p>
    </>
  
)
}
