function netExplosiveWeight (qty,exp,weight)

{
  if (weight === false && exp.weight === false)
   {return 'You need to enter a weight';}

  else if (weight === false && exp.weight === true)
  {return exp.weight * qty * exp.reFactor;}

  else if (weight === true && exp.weight === true)
    {return weight * qty * exp.reFactor;}

  else if (weight === true && exp.weight === false)
    {return weight * qty * exp.reFactor;}

}

c4 = {name: 'C4', weight: 1.25, reFactor: 1.34 };

ammoniumNitrate = {name: 'Ammonium nitrate', reFactor: 0.42 };

petn = {name: 'PETN', reFactor: 1.66};

rdx = {name: 'RDX', reFactor: 1.60};

tnt = {name: 'TNT', reFactor: 1};

tetryl = {name: 'Tetryl', reFactor: 1.25};

nitroglycerin = {name: 'Nitroglycerin', reFactor: 1.50 };

blackPowder = {name: 'Black powder', reFactor: 0.55};

amatol8020 = {name: 'Amatol 80/20', reFactor: 1.17 };

compositionB = {name: 'Composition B', reFactor: 1.35};

compositionH6 = {name: 'CompositionH6', reFactor: 1.33 };

m1Dynamite = {name: 'M1 dynamite ', reFactor: 0.92};

detonatingCord= {name: 'Detonating cord', reFactor: 1.66};

sheetExplosiveM186 = {name: 'Sheet explosive(M186)', reFactor: 1.14 };

bangaloreTorpedoM1A2 = {name: 'Bangaloretorpedo, M1A2', reFactor: 1.17 };

document.write(netExplosiveWeight(1, c4, 3));
