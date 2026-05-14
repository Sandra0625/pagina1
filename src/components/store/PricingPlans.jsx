import { PRICING_PLANS } from "../../data/storeData";

export default function PricingPlans() {
  return (
    <section
      style={{
        padding: "60px 0",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <h2>Planes de pago</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "24px",
          }}
        >
          {PRICING_PLANS.map(
            (plan) => (
              <div
                key={plan.name}
                style={{
                  background: "#fff",
                  padding: "24px",
                  borderRadius: "20px",
                  border:
                    "1px solid #e5e7eb",
                }}
              >
                <h3>{plan.name}</h3>
                <p>
                  {plan.description}
                </p>
                <strong>
                  {plan.discount}
                </strong>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}