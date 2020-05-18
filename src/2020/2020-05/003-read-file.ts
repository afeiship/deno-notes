for (let i = 0; i < Deno.args.length; i++) {
  let filename = Deno.args[i];
  let file = await Deno.open(filename);
  await Deno.copy(file, Deno.stdout);
  file.close();
}



// deno run--allow - read https://deno.land/std/examples/cat.ts /etc/passwd
