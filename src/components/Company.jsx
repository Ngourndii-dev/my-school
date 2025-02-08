import people from '../data/responsible'
export default function company() {
  return (
    <div className="bg-white py-24 sm:py-32" id='company'>
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Leadership at a prestigious Institution
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            ...shape the academic environment , ensuring axcellence and innovation . 
            THrough strategic guidance , the leadership team fosters a culture of success ,
            empowering students and faculty alike
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.responsibleData.map((person) => (
            <li key={person.id}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.image} className="size-16 rounded-full" />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.fullname}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
