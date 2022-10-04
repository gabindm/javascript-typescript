for (i=1; i<=100; i++)
{
	//process.stdout.write('\r');
	process.stdout.write(`O contador esta em: ${i}%\r`);
	for(j=0; j<10000000;j++){}
}
process.stdout.write("\n");

