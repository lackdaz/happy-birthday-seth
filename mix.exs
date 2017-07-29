defmodule Caesar.Mixfile do
  use Mix.Project

  def project do
    [
      app: :caesar,
      version: "0.1.0",
      elixir: "~> 1.5",
      deps: deps()
    ]
  end

  def application do
    [
      mod: {Caesar, []},
      extra_applications: [],
    ]
  end

  defp deps do
    []
  end
end
