const { Connection, clusterApiUrl, Keypair, LAMPORTS_PER_SOL } = require("@solana/web3.js");

const main = async () => {

    const connection = new Connection(clusterApiUrl('devnet'), 'processed');
    const wallet = Keypair.generate();
    const airdropSignature = await connection.requestAirdrop(
        wallet.publicKey,
        1 * LAMPORTS_PER_SOL
    );

    await connection.confirmTransaction(airdropSignature);
    const balance = await connection.getBalance(wallet.publicKey);
    console.log(balance);
}

const runMain = async () => {
    try {
        await main();
    } catch (error) {
        console.error(error);
    }
}

runMain();