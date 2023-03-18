function gemsToDiamond(gem1, gem2, gem3){
    gem1*=21;
    gem2*=32;
    gem3*=43;

    var total =  gem1 + gem2 + gem3;
    if(total > 2000){
        return total - 2000;
    }
    else
    {
        return total;
    }
}

console.log(gemsToDiamond(100,5,1));