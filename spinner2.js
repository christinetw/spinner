let anim = "|/-\\|";
for (let i = 0; i < anim.length; i++) {
    setTimeout(() => {
    process.stdout.write(`\r${anim[i]}   `);
  }, 100 + i * 200);
}
setTimeout(() => {
  console.log("");
}, 100 + anim.length * 200);