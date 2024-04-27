import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const VerifyModule1 = buildModule("VerifyModule1", (m) => {
  const nft1 = m.getParameter(
    "nft1",
    "0xa5C0Bd78D1667c13BFB403E2a3336871396713c5"
  );
  const nft2 = m.getParameter(
    "nft2",
    "0x3243ac6f63f75e260346a14e1d1445f2a2708444"
  );
  const wormhole = m.getParameter(
    "wormhole",
    // "0x4a8bc80ed5a4067f1ccf107057b8270e0cc11a78"
    "0x98f3c9e6E3fAce36bAAd05FE09d375Ef1464288B"
  );
  const chainId = m.getParameter("chainId", 2);
  const wormholeFinality = m.getParameter("wormholeFinality", 100);

  const verify = m.contract("Verify", [
    nft1,
    nft2,
    wormhole,
    chainId,
    wormholeFinality,
  ]);

  return { verify };
});

export default VerifyModule1;
