export const $ = <T extends string>(name: T) => {
   const variable = process.env[name]

   if (variable === undefined) {
      throw new Error(`Environment variable '${name}' wasn't set`)
   }

   return {
      [name]: variable
   } as { [key in typeof name]: string }
}

export const ensureCreate = <const T extends string>(...inputs: T[]) => {
   const vars = inputs.reduce((p, c) => ({ ...p, ...$(c) }), {})
   return vars as { [key in typeof inputs[number]]: string }
}
